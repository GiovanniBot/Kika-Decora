type Theme = {
  _id: string;
  topFive: boolean;
  newTheme: boolean;
  tag: string[];
  name: string;
  mainImg: string;
  imgs: {
    _id: string;
    url: string;
  }[];
};

export default Theme;