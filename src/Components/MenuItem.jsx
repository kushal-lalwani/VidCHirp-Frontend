const MenuItem = ({ icon, title, route }) => {
  
  return (
    <div className="cursor-pointer flex px-3 py-1.5 mx-2 my-4 gap-5 font-semibold">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;