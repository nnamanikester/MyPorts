import gql from 'graphql-tag';

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

export const MULTI_UPLOAD = gql`
  mutation singleUpload($files: [Upload!]!) {
    multiUpload(files: $files) {
      urls
    }
  }
`;
