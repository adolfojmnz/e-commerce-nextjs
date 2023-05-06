import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <>
      <footer>
        <a
          href="https://github.com/eadwulf/e-commerce-nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adolfo Jimenez 2023 | Project on{' '}
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </>
  );
}