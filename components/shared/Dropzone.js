import { useDropzone } from 'react-dropzone';
import Button from './buttons/UploadFileButton';
import { toast } from 'react-toastify';

const Dropzone = ({
  maxSize,
  setFieldValue,
  fieldKey,
  multi_Sel,
  pot_err = {},
  loading,
}) => {
  const { getRootProps, getInputProps, open, fileRejections } = useDropzone({
    accept: 'image/*',
    maxSize,
    onDrop: (acceptedFiles) => {
      setFieldValue(fieldKey, multi_Sel ? acceptedFiles : acceptedFiles[0]);
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

  React.useEffect(() => {
    if (pot_err.avatar && pot_err.avatar.includes('Add a profile image'))
      toast.warning(pot_err.avatar, {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: 10,
        autoClose: false,
      });
  }, [pot_err]);

  return (
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
  );
};

export default Dropzone;
