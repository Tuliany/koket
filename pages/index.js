import { data } from "./api/data.js";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      dataList: data,
    },
  };
};

export default function Home({ dataList }) {
  console.log(dataList);
  return (
    <div className={styles.grid}>
      {dataList.slice(0, 6).map((data) => (
        <Link key={data.id} href={`https://www.koket.se/${data.url}`}>
          <div className={styles.child}>
            <picture>
              <h1 className={styles.title}>{data.name}</h1>
              {data.sponsored && (
                <div className={styles.sponsor}>
                  <h2 className={styles.label}>Sponsrat</h2>
                </div>
              )}
              <img
                src={data.image.url}
                className={styles.img}
                alt="food-pic"
                onError={(e) => {
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
