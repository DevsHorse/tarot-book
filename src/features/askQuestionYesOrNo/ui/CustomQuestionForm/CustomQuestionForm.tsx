import styles from './CustomQuestionForm.module.css';
import { useHandleQuestionForm } from '../../lib';
import { Button } from '@/shared/ui/Button';
import { Textarea } from '@/shared/ui/Textarea';

const CustomQuestionForm = () => {
  const { value, setValue, handleSubmit } = useHandleQuestionForm();

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <Textarea
        placeholder='question'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={250}
        minLength={5}
        rows={6}
        name='question'
        required
      />
      <Button className={styles.button} type='submit'>
        Get the answer
      </Button>
    </form>
  );
};

export default CustomQuestionForm;
