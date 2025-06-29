export default interface SessionAbstract {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
  expires: string;
}
