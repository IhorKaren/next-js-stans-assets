import styles from "./contentTextBlock.module.scss";

const ContentTextBlock = ({
  firstTitle,
  secondTitle,
  firstTextBlock,
  secondTextBlock,
}) => {
  return (
    <section>
      <div className={styles.container}>
        <ul className={styles.content_list}>
          <li className={styles.content_list_item}>
            {firstTitle && (
              <h2 className={styles.content_list_item_title}>{firstTitle}</h2>
            )}
            {firstTextBlock ? (
              <p dangerouslySetInnerHTML={{ __html: firstTextBlock }}></p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut
                leo eleifend lobortis fringilla non elit. Vivamus mollis, odio
                ac finibus rutrum, libero augue venenatis leo, in maximus ipsum
                dui et est. In in aliquet libero. In ac enim non lectus
                convallis feugiat.
                <br />
                <br />
                Ut in pharetra tortor. Quisque ligula magna, iaculis non porta
                ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac
                dapibus turpis. Etiam suscipit orci eu tristique gravida.
              </p>
            )}
          </li>
          <li className={styles.content_list_item}>
            {secondTitle && (
              <h2 className={styles.content_list_item_title}>{secondTitle}</h2>
            )}
            {secondTextBlock ? (
              <p dangerouslySetInnerHTML={{ __html: secondTextBlock }}></p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut
                leo eleifend lobortis fringilla non elit. Vivamus mollis, odio
                ac finibus rutrum, libero augue venenatis leo, in maximus ipsum
                dui et est. In in aliquet libero. In ac enim non lectus
                convallis feugiat.
                <br />
                <br />
                Ut in pharetra tortor. Quisque ligula magna, iaculis non porta
                ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac
                dapibus turpis. Etiam suscipit orci eu tristique gravida.
              </p>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContentTextBlock;
