import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/authSlice";

export default function HeaderTop() {
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between py-5 max-w-screen-xl mx-auto">
      <div>
        <a href="/">
          <span className="flex text-sm">
            <div className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            Find a store
          </span>
        </a>
      </div>
      <div className="flex">
        <NavLink to="/login" className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </NavLink>
        {/* <button onClick={() => dispatch(logout())} className="mx-2"> */}
        <NavLink to="/wishlist" className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          {/* </button> */}
        </NavLink>
        <NavLink to="/cart" className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </NavLink>
      </div>
    </nav>
  );
}
