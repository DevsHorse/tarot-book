import { FC, PropsWithChildren, TextareaHTMLAttributes, useMemo } from 'react';
import styles from './Textarea.module.css';

type PropsType = TextareaHTMLAttributes<HTMLTextAreaElement> &
  PropsWithChildren;

const Textarea: FC<PropsType> = ({ children, ...props }) => {
  const counterValues = useMemo(() => {
    if (!props.maxLength) return null;

    let count = 0;
    if (props.value) {
      count = String(props.value).length;
    } else if (props.defaultValue) {
      count = String(props.defaultValue).length;
    }

    return {
      count,
      max: props.maxLength,
    };
  }, [props.value, props.defaultValue, props.maxLength]);

  return (
    <div className={styles.root}>
      <textarea {...props}>{children}</textarea>
      {counterValues && (
        <div className={styles.counter}>
          {counterValues.count}/{counterValues.max}
        </div>
      )}
    </div>
  );
};

export default Textarea;
