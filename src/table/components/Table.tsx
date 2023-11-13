import { ITableProps } from "@TableTypes/props";
import React from "react";
import { Loading } from "./Loading";
import "@TableAssets/css/table.css";
import { Modal } from "./common/Modal";
import "@TableAssets/css/modal.css";
import { Filters } from "./Filters";
import { buildModalContent } from "@TableUtils/buildModal";

export const Table = ({ users, page, filters, setFilters }: ITableProps) => {
  const [modal, setModal] = React.useState({
    visible: false,
    modalContnet: <div></div>,
  });

  const rows = users[page]?.map((user) => {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    return (
      <tr
        key={user.cell}
        style={{ cursor: "pointer" }}
        onClick={() =>
          setModal({
            visible: true,
            modalContnet: buildModalContent(user, fullName, setModal),
          })
        }
      >
        <td>
          <img src={user.picture.thumbnail} alt={fullName} />
        </td>
        <td>{fullName}</td>
        <td>{user.gender}</td>
        <td>{user.nat}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.location.country}</td>
        <td>{user.location.city}</td>
      </tr>
    );
  });

  return (
    <div>
      <Modal
        content={modal.modalContnet}
        setVisible={setModal}
        visible={modal.visible}
      />
      <Filters filters={filters} setFilters={setFilters} />
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th colSpan={2}>Fullname</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};