import Button from "./common/Button";

export default function DonwloadButton() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      <Button size="lg" className="w-[18rem]" glow>
        Download
        <br />
        EGGMPIRE Whitepaper
      </Button>
      <Button size="lg" className="w-[18rem]" glow>
        The Ethereum
        <br />
        Smart Contracts
      </Button>
    </div>
  );
}
