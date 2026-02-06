import type { FC } from 'react';
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type RowData,
    type SortingState,
} from '@tanstack/react-table';
import { useState } from 'react';

const SortIcon: FC = () => (
    <span className="ml-1 inline-flex shrink-0 align-middle text-[#1D3557] cursor-pointer">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.00098 7H4.21148C4.67648 7 4.90898 7 4.97148 7.14C5.03298 7.28 4.87498 7.448 4.55848 7.784L2.73948 9.716C2.42298 10.052 2.26448 10.22 2.32648 10.36C2.38848 10.5 2.62148 10.5 3.08648 10.5H5.00098M2.00098 4.5L3.05398 2.1525C3.24898 1.7175 3.34598 1.5 3.50098 1.5C3.65598 1.5 3.75298 1.7175 3.94798 2.1525L5.00098 4.5M8.75098 10V2M8.75098 10C8.40098 10 7.74698 9.003 7.50098 8.75M8.75098 10C9.10098 10 9.75548 9.003 10.001 8.75"
                stroke="#8597A8"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

export interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    minWidth?: string;
}

function DataTable<TData extends RowData>({ columns, data, minWidth = '800px' }: DataTableProps<TData>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table returns unstable refs by design; table instance is consumed only in this component
    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
                <thead className="h-[40px] bg-[#F5F8FB]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="bg-[#F5F8FB]">
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="py-[11px] px-[16px] font-normal text-[12px] leading-[100%] text-[#1D3557] first:rounded-l-[10px] last:rounded-r-[10px] last:pr-0"
                                >
                                    <div
                                        className="flex items-center [th:last-child_&]:justify-center"
                                        onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                                        onKeyDown={
                                            header.column.getCanSort()
                                                ? (e) => e.key === 'Enter' && header.column.getToggleSortingHandler()?.(e)
                                                : undefined
                                        }
                                        role={header.column.getCanSort() ? 'button' : undefined}
                                        tabIndex={header.column.getCanSort() ? 0 : undefined}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getCanSort() && <SortIcon />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="text-[#1D3557]">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b border-[#E0E8ED] last:border-0">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="py-3 px-4 text-[14px] text-[#1D3557] last:pr-0">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
