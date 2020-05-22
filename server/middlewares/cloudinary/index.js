const esrever = require('esrever');

exports.upload_cloudinary = async (file) => {
  const { createReadStream } = await file;
  let resultSecure_URL = '';
  const cloudinaryUpload = async ({ createReadStream }) => {
    try {
      await new Promise((res, rej) => {
        const streamLoad = require('../index').cloudinary.v2.uploader.upload_stream(
          function (err, result) {
            if (result) {
              resultSecure_URL = result.secure_url;
              res(resultSecure_URL);
            } else {
              rej(err);
            }
          }
        );
        createReadStream().pipe(streamLoad);
      });
    } catch (err) {
      throw new Error(`Failed to upload profile picture ! Err:${err.message}`);
    }
  };
  await cloudinaryUpload({ createReadStream });
  return resultSecure_URL;
};

exports.destroy_cloud = (model, id, switchProps) => {
  const switch_model_prop = (switch_params) =>
    switch_params ? 'screenshots' : 'avatar';

  const extractSubstring = (str) => {
    let st_index = '',
      ed_index = '';
    str = esrever.reverse(str);
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '.') st_index = i + 1;
      else if (str.charAt(i) === '/') {
        ed_index = i;
        break;
      } else continue;
    }
    return esrever.reverse(str.substring(st_index, ed_index));
  };

  model
    .findById(id)
    .select(switch_model_prop(switchProps))
    .exec((err, fetch_data) => {
      if (err || !fetch_data) throw new Error('Intended data not found');
      else {
        if (switch_model_prop(switchProps) === 'screenshots')
          for (
            let i = 0;
            i < fetch_data[switch_model_prop(switchProps)].length;
            i++
          )
            require('../index').cloudinary.v2.uploader.destroy(
              extractSubstring(fetch_data[switch_model_prop(switchProps)][i]),
              function (err, result) {
                console.log('ERROR: ', err, 'RESULT: ', result);
              }
            );
        else if (switch_model_prop(switchProps) === 'avatar')
          require('../index').cloudinary.v2.uploader.destroy(
            extractSubstring(fetch_data[switch_model_prop(switchProps)]),
            function (err, result) {
              console.log('ERROR: ', err, 'RESULT: ', result);
            }
          );
      }
    });
};
