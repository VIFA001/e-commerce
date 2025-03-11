import ProductList from "@/components/pages/markeplace/ProductList";
import Marquee from "react-fast-marquee";
export default function Marketplace() {
  return (
    <section className="container mx-auto p-4">
      <Marquee>
        <p className="ml-4">Gentlemen wear</p>
        <p className="ml-4">Watches</p>
        <p className="ml-4">Exclusive deals</p>
        <p className="ml-4">Fast Delivery</p>
      </Marquee>
      <h1 className="text lg:text-5xl text-center my-8 text-amber-500 font-semibold animate-pulse">
        Home of affordable wears
      </h1>
      <ProductList />
    </section>
  );
}
