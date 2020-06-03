const esrever = require('esrever');
const promisesAll = require('promises-all');

exports.upload_cloudinary = async (file) => {
  const { createReadStream, filename } = await file;
  let resultSecure_URL = '';
  const cloudinaryUpload = async ({ createReadStream }) => {
    try {
      await new Promise((res, rej) => {
        const streamLoad = require('../index').cloudinary.v2.uploader.upload_stream(
          { public_id: filename },
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
    st_index = str.indexOf('.') + 1;
    ed_index = str.indexOf('/');
    return esrever.reverse(str.substring(st_index, ed_index));
  };

  model
    .findById(id)
    .select(switch_model_prop(switchProps))
    .exec((err, fetch_data) => {
      if (err || !fetch_data) throw new Error('Intended data not found');
      else {
        if (switch_model_prop(switchProps) === 'screenshots')
          for (let i = 0; i < fetch_data['screenshots'].length; i++)
            require('../index').cloudinary.v2.uploader.destroy(
              extractSubstring(fetch_data['screenshots'][i].screenshot),
              function (err, result) {
                console.log('ERROR: ', err, 'RESULT: ', result);
              }
            );
        else if (switch_model_prop(switchProps) === 'avatar')
          require('../index').cloudinary.v2.uploader.destroy(
            extractSubstring(fetch_data['avatar']),
            function (err, result) {
              console.log('ERROR: ', err, 'RESULT: ', result);
            }
          );
      }
    });
};

exports.upload_Merge = async (proj_data) => {
  const { resolve, reject } = await promisesAll.all(
    proj_data.screenshots.map((ss) => this.upload_cloudinary(ss['screenshot']))
  );
  if (reject.length)
    reject.forEach(({ name, message }) => {
      console.log(`${name}: ${message}`);
    });
  let mutated_screenshots = [];
  for (let i = 0; i < resolve.length; i++) {
    for (let j = 0; j < proj_data.screenshots.length; j++) {
      if (resolve[i].includes(proj_data.screenshots[j]['fileName'])) {
        mutated_screenshots.push({
          screenshot: resolve[i],
          caption: proj_data.screenshots[j].caption,
          description: proj_data.screenshots[j].description,
        });
      }
    }
  }
  return mutated_screenshots;
};
