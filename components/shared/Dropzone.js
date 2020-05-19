import { useDropzone } from 'react-dropzone';
import Button from './UploadFileButton';
import { toast } from 'react-toastify';

const Dropzone = (props) => {
  const { getRootProps, getInputProps, open, fileRejections } = useDropzone({
    accept: 'image/*',
    maxSize: props.maxSize,
    onDrop: (acceptedFiles) => {
      props.setFieldValue(
        props.fieldKey,
        props.multi_Sel ? acceptedFiles : acceptedFiles[0]
      );
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

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <Button type='button' loading={props.loading} onClick={open}>
        Open File Dialog
      </Button>
    </div>
  );
};

export default Dropzone;
