interface ContanierProps {
  children: React.ReactNode;
}
export default function Contanier({ children }: ContanierProps) {
  return <div className=" w-full  max-w-5xl m-auto  ">{children}</div>;
}
