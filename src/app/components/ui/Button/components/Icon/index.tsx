import Spinner from '@app/components/ui/Spinner';

interface IconProps {
  icon: React.ElementType;
  loading?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon: Icon, loading }) => {
  if (loading) return <Spinner size={5} />;
  return <Icon className="size-5" />;
};

export default Icon;
