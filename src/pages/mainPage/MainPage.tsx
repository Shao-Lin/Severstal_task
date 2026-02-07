import FilterGroup from "../../widgets/filterGroup/FilterGroup";
import GridTasks from "../../widgets/gridTasks/GridTasks";
import Header from "../../widgets/MainHeader/Header";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header />
        <main className={styles.main}>
          <FilterGroup />
          <GridTasks />
        </main>
      </div>
    </div>
  );
};
export default MainPage;
