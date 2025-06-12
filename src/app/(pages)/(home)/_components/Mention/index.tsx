export default function Mention() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <p className="italic">
        “Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós
        mesmos.”
      </p>

      <div className="flex items-center gap-4">
        <div className="h-[1px] w-[24px] bg-text-primary" />
        <p className="italic">Friedrich Nietzsche</p>
      </div>
    </section>
  );
}
