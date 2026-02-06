import type { FC } from 'react';
import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import DataTable from '../../../../components/DataTable';
import type { EvidenceRow, EvidenceStatus } from '../../constants';

interface EvidenceTableProps {
    rows: EvidenceRow[];
}

const statusClasses: Record<EvidenceStatus, string> = {
    Approved: 'bg-[#EAF9EE] text-[#34C759]',
    'Pending Review': 'bg-[#FFF9E5] text-[#FFCC00]',
    'In Progress': 'bg-[#DBEAFE] text-[#1E40AF]',
};

const EvidenceTable: FC<EvidenceTableProps> = ({ rows }) => {
    const columns = useMemo<ColumnDef<EvidenceRow, string>[]>(
        () => [
            {
                accessorKey: 'documentNumber',
                header: 'Document Number',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'documentName',
                header: 'Document Name',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'documentLead',
                header: 'Document Lead',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'documentPreparer',
                header: 'Document Preparer',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'date',
                header: 'Date',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'dueDate',
                header: 'Due Date',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'status',
                header: 'Status',
                cell: (info) => {
                    const status = info.getValue() as EvidenceStatus;
                    return (
                        <div className="flex w-full items-center justify-center">
                            <span
                                className={`h-[30px] inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[14px] leading-[20px] font-medium whitespace-nowrap ${statusClasses[status]}`}
                            >
                                {status}
                            </span>
                        </div>
                    );
                },
            },
        ],
        []
    );

    return <DataTable<EvidenceRow> columns={columns as ColumnDef<EvidenceRow, unknown>[]} data={rows} minWidth="800px" />;
};

export default EvidenceTable;
