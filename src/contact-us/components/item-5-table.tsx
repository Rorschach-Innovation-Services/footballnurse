import { Table } from "@mantine/core";
import { TableItems } from "./item-5-list";

export const TableItem5 = () => {
    const rows = TableItems.map((element) => (
        <tr key={element.user}>
            <td
                style={{
                    fontSize: "12px"
                }}
            >
                {element.user}
            </td>
            <td
                style={{
                    fontSize: "12px"
                }}
            >
                {element.discription}
            </td>
            <td
                style={{
                    fontSize: "12px"
                }}
            >
                {element.softwareUse}
            </td>
        </tr>
    ));
    return (
        <Table
            sx={{
                marginTop: "20px"
            }}>
            <thead>
                <tr>
                    <th
                        style={{
                            fontSize: "14px"
                        }}>User</th>
                    <th
                        style={{
                            fontSize: "14px"
                        }}>Description</th>
                    <th
                        style={{
                            fontSize: "14px"
                        }}>Software use</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}