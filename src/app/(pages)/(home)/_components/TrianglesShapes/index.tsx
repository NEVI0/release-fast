export default function TrianglesShapes() {
  return (
    <>
      {/* Gradient Triangle 1 - Top Left */}
      <div
        className="absolute top-[10%] left-[-188px] w-[350px] h-[450px] rotate-[224deg]"
        style={{
          background:
            'linear-gradient(0deg, rgba(237, 201, 55, 0.1) 0%, rgba(237, 201, 55, 0.6) 100%)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Gradient Triangle 2 - Bottom Right */}
      <div
        className="absolute top-[45%] right-[-124px] w-[350px] h-[450px] rotate-[100deg]"
        style={{
          background:
            'linear-gradient(0deg, rgba(237, 201, 55, 0.1) 0%, rgba(237, 201, 55, 0.6) 100%)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
    </>
  );
}
