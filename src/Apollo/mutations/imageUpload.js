import gql from 'graphql-tag';

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      url
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
