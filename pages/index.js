import { data } from "./api/data.js";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = data.map((data) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
}
export const getStaticProps = async () => {
  return {
    props: {
      dataList: data,
    },
  };
};

export default function Home({ dataList }) {
  return (
    <div className={styles.grid}>
      {dataList.slice(0, 6).map((data) => (
        <Link key={data.id} href={`recipes/${data.id}`}>
          <div className={styles.child}>
            <picture>
              <h1 className={styles.title}>{data.name}</h1>
              {data.sponsored && (
                <div className={styles.sponsor}>
                  <h2>Sponsrat</h2>
                </div>
              )}
              <img
                src={data.image.url}
                className={styles.img}
                alt="food-pic"
                onError={() => {
                  e.target.src = "../public/images.png";
                }}
              />
            </picture>
          </div>
        </Link>
      ))}
    </div>
  );
}
