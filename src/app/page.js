import CurrencyList from "@/components/currencyList/currencyList";
import Aboutus from "@/components/aboutUs/aboutUs";
import ContactUs from "@/components/contactUs/contactUs";
import CalculateCurrency from "@/components/calculateCurrency/calculateCurrency";

export default function Home() {
  return (
    <main className="p-24 lg:p-12 md:p-6 sm:p-3 mt-5">
      <h1
        className="flex justify-center items-center text-4xl text-center mb-3 font-bold text-titlePrimary"
        id="startSection"
      >
        Myanmar currency exchange
      </h1>
      <h2 className="text-lg mb-5">
        Welcome to our currency exchange rate checker, designed to provide
        real-time rates based on MMK (Myanmar Kyat) and calculate conversions
        for your specific amount.
      </h2>
      <div className="items-center">
        {/* currency convert*/}
        <CalculateCurrency />
      </div>

      {/* currency list */}
      <div className="flex justify-center mt-5 mb-5" id="currencyList">
        <CurrencyList />
      </div>
      {/* about us */}
      <Aboutus />
      {/* contact us */}
      <ContactUs />
    </main>
  );
}
