export interface IBook {
  _id: string;
  title: string;
  description?: string;
  genre: string;
  author: string;
  photoUrl: string;
  publicationDate: Date;
  reviews: string;
}

export interface bookCardProps {
  book: IBook[];
  //   onEdit: () => void;
  //   onDelete: () => void;
  //   onDetails: () => void;
}
