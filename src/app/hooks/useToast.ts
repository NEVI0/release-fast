import { toast } from 'sonner';

export default function useToast() {
  return { show: toast, success: toast.success, error: toast.error };
}
