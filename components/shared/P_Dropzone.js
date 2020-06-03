import { useDropzone } from 'react-dropzone';
import Button from './buttons/UploadFileButton';
import { toast } from 'react-toastify';
import Input, {
  ThumbsContainer,
  Thumb,
  ThumbInner,
  Image,
} from '../styles/specific/dropzone_styles';

const P_Dropzone = ({
  maxSize,
  setFieldValue,
  fieldKey,
  pot_err = {},
  loading,
}) => {
  const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps, open, fileRejections } = useDropzone({
    accept: 'image/*',
    maxSize,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(
            {},
            {
              screenshot: file,
              fileName: file.name,
              preview: URL.createObjectURL(file),
              caption: '',
              description: '',
            }
          )
        )
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

  const handleChange = (index) => (e) => {
    let arr = [...files];
    arr[index][e.target.name] = e.target.value;
    setFiles(arr);
  };

  const thumbs = files.map((file, i) => (
    <Thumb key={i}>
      <ThumbInner>
        <Image src={file.preview} />
        <Input
          className='caption'
          name='caption'
          value={file.caption}
          onChange={handleChange(i)}
        />
        <Input
          className='description'
          name='description'
          value={file.description}
          onChange={handleChange(i)}
        />
      </ThumbInner>
    </Thumb>
  ));

  React.useEffect(() => {
    setFieldValue(fieldKey, files);
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
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
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </section>
  );
};

export default P_Dropzone;
