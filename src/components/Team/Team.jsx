// import PropTypes from 'prop-types'

const Team = ({ member }) => {
  const { name, role, bio, image } = member;
  return (
    <div className="w-10/12 bg-white p-10 rounded-lg  flex flex-col justify-center items-center">
      <img
        className="w-[100px] h-[100px]  overflow-hidden rounded-full"
        src={image}
      />
      <h1 className="text-xl mt-3 mb-2 font-bold">{name}</h1>
      <h3 className="text-stone-500">{role}</h3>
      <p className="text-center mt-3 text-slate-600">{bio.slice(0, 150)}</p>
    </div>
  );
};

// Team.propTypes = {}

export default Team;
