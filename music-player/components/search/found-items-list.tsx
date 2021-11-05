// import Link from "next/link";
import SearchItemInterface from "../../utils/interfaces/SearchItem";
import styles from "./FoundItems.module.scss";

interface IProps {
  items: SearchItemInterface;
}

const FoundItemsList = ({ items }: IProps) => {
  return (
    <div className={styles.items}>
      <li>Song 1</li>
      <li>Song 2</li>
      <li>Song 3</li>
      <li>Artist 1</li>
      <li>Artist 2</li>
      {/* {items.map(function (s, idx) {
        //const artistLink = `/artists/${s.id}`;

        return (
          <div className={styles.artist} key={idx}>
            {/* <Link href={artistLink}> */}
      {/* <img src={s.url} alt={s.name} /> */}
      {/* </Link> */}
      {/* <p>{s.name}</p> */}
      {/* </div> */}
      {/* ); */}
      {/* })} */}
    </div>
  );
};

export default FoundItemsList;
