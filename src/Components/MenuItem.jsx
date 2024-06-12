const MenuItem = ({ icon, title, route }) => {
  
  return (
    <div className="flex px-3 py-2 border-2 m-2 gap-5 font-semibold">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;