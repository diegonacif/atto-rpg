import '../../Styles/global.css';

export const Header = ({ sumValue }) => {
  return (
    <main className="header">
      <h1>Soma total: {sumValue} </h1>
    </main>
  );
};