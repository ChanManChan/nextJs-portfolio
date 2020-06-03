import { useDropzone } from 'react-dropzone';
import Button from './buttons/UploadFileButton';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Preview = styled.div`
  border-radius: 0.2rem;
  border: 0.1rem solid ${(p) => p.theme.staticColor2};
  width: 20rem;
  height: 20rem;
  padding: 0.4rem;
  margin: -2rem 0 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const commonStyle = {
  color: 'red',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const Dropzone = ({
  maxSize,
  setFieldValue,
  fieldKey,
  pot_err = {},
  loading,
  no_prev = false,
}) => {
  const [file, setFile] = React.useState({ img: null, preview: '' });

  const { getRootProps, getInputProps, open, fileRejections } = useDropzone({
    accept: 'image/*',
    maxSize,
    onDrop: (acceptedFiles) => {
      setFile({
        img: acceptedFiles[0],
        preview: acceptedFiles[0] && URL.createObjectURL(acceptedFiles[0]),
      });
    },
    noClick: true,
    noKeyboard: true,
  });

  React.useMemo(() => {
    if (fileRejections.length > 0)
      toast.error(fileRejections[0].errors[0].message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  }, [fileRejections]);

  if (no_prev) {
    if (
      pot_err.certificate_img &&
      pot_err.certificate_img.includes('Provide a')
    )
      toast.warning(pot_err.certificate_img, {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: 10,
        autoClose: false,
      });
  } else {
    if (pot_err.avatar && pot_err.avatar.includes('Add a profile image of'))
      toast.warning(pot_err.avatar, {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: 10,
        autoClose: false,
      });
  }

  React.useEffect(() => {
    setFieldValue(fieldKey, file.img);
    return () => {
      URL.revokeObjectURL(file.preview);
    };
  }, [file]);

  return (
    <>
      {no_prev ? (
        <p style={commonStyle}>{pot_err.certificate_img}</p>
      ) : (
        <p style={commonStyle}>{pot_err.avatar}</p>
      )}
      <section className='container'>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Button
            className='dropzone--btn'
            type='button'
            loading={loading}
            onClick={open}
          >
            Open File Dialog
          </Button>
        </div>
        {file.preview && !no_prev && (
          <Preview>
            <img src={file.preview} />
          </Preview>
        )}
      </section>
    </>
  );
};

export default Dropzone;
