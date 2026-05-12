const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl text-white font-bold">{title}</h2>
      <p className="text-white">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;