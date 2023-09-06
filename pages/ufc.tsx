import Link from 'next/link';

const UFCPage = () => {
  return (
    <div>
      <h1>UFC Wallpapers</h1>
      {/* Add content specific to UFC wallpapers */}
      <Link href="/"> {/* Link to the home page */}
        <a>Go back to Home</a>
      </Link>
    </div>
  );
};

export default UFCPage;