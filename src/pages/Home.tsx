import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex items-center justify-center  text-4xl font-bold text-foreground">
      Welcome to  {" "}<span className="text-primary ml-2">C</span>osmoStack!

      <Button>Hello from shadcn button</Button>
    </div>
  );
};

export default Home;
