import BrandedButton from "./brandad-button";
import BrandedHtmlButton from "./brandad-html-button";
import CommonButton from "./common/button";
import styles from "./page.module.css";
import Table from "./table";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>MUI button from common with global theme overrides</h2>
      <CommonButton />
      <h2>MUI button from common with global theme overrides and children</h2>
      <CommonButton>This is text coming from children</CommonButton>
      <h2>MUI button from brand with style theme overrides</h2>
      <BrandedButton />
      <h2>Regular html button from brand with style theme overrides</h2>
      <BrandedHtmlButton />
      <Table />
    </main>
  );
}
