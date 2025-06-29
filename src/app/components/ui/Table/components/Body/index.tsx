interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default Body;
