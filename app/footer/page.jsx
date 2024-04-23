export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="navbgColor p-3 items-center bottom-0 sticky">
        <div className="container my-2 mx-auto">
          <div className="font-serif justify-between flex">
            <p className="flex-wrap italic font-serif">
              &copy; 2024 The Puerto Rico Library
            </p>
            <ul className="mx-auto flex flex-wrap">
              <li>
                <a href="#" className="mr-4 hover:text-white hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:text-white hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="mr-4">
                  prlibrary@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="mr-4">
                  787-208-5555
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
