import { FC, HTMLAttributes } from 'react';
import styles from './PinnedCustomQuestionForm.module.css';
import cs from 'classnames';
import { useHandleQuestionForm } from '../../lib';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import bgUrl from '@/shared/assets/yesOrNoAnswer/bg-gradient-1.png';

type PropsType = HTMLAttributes<HTMLDivElement>;

const PinnedCustomQuestionForm: FC<PropsType> = ({ className }) => {
  const { value, setValue, handleSubmit } = useHandleQuestionForm();

  return (
    <div className={cs(styles.root, className)}>
      <img src={bgUrl} alt='background gradient' loading='lazy' />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          className={styles.input}
          placeholder='question'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name='question'
          type='text'
          maxLength={250}
          minLength={5}
          required
        />
        <Button type='submit' className={styles.button}>
          Get The Answer
        </Button>
      </form>
    </div>
  );
};

export default PinnedCustomQuestionForm;
