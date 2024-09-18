import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Popover, DialogContent } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    setIsLeadsSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const Leads = (props: Props) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [sales, setSales] = useState([
        { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", email: "ghdkie@gmail.com", company: "Helixo" },
        { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00003", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00004", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00005", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00006", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00007", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        { id: "00008", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", email: "set44@gmail.com", company: "Jacko" },
        // Add more sales data here...
    ]);

    // Handle row selection
    const toggleRowSelection = (id: string) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };

    // Handle bulk selection
    const selectRows = (count: number) => {
        setSelectedRows(sales.slice(0, count).map(sale => sale.id));
    };

    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle Popover close
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const isPopoverOpen = Boolean(anchorEl);

    return (
        <div className="mt-4 bgwhite relative">
            {/* Top Actions */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex ">
                    <button onClick={() => props.setIsLeadsSection(false)} className=' bg-white border border-gray-300 rounded-s-lg p-2'>

                        <span >
                            <ArrowBackIcon color="action" />
                        </span>

                    </button>
                    <button
                        onClick={() => selectRows(10)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 border-x-2"
                    >
                        Select 10
                    </button>
                    <button
                        onClick={() => selectRows(20)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 border-r-2"
                    >
                        Select 20
                    </button>
                    <button onClick={handlePopoverOpen} className="bg-purple-600 text-white py-2 px-4  rounded-e-lg border-">
                        Select Person
                    </button>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                    Assign Leads
                </button>
            </div>

            {/* Selection Card */}


            <Popover
                open={isPopoverOpen}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',

                }}

                slotProps={{
                    paper: {
                        style: {
                            borderRadius: "8px",
                            boxShadow: '2px'
                        }
                    }
                }}
            >
                <DialogContent className='flex flex-col items-center'>
                    <div>
                    <InputBase 
                        sx={{ ml: 1, flex: 1,width:240 }}
                        placeholder="Search Employees"
                        inputProps={{ 'aria-label': 'Search Employees' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    </div>
                    <Divider sx={{ width: 280, border:1, borderColor:"gray" }} orientation="horizontal" />
                    
                    <ul>
                        <li className="flex items-center my-6 space-x-2">
                            <a href="#" className="relative block">
                                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10" />
                            </a>
                            <div className="flex flex-col">
                                <span className="ml-2 text-sm font-semibold text-gray-900"> Rabiller</span>
                                <span className="ml-2 text-sm text-gray-400">Hey John! Do you read the NextJS doc?</span>
                            </div>
                        </li>
                        <li className="flex items-center my-6 space-x-2">
                            <a href="#" className="relative block">
                                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10" />
                            </a>
                            <div className="flex flex-col">
                                <span className="ml-2 text-sm font-semibold text-gray-900">Charlie Rabiller</span>
                                <span className="ml-2 text-sm text-gray-400">Hey John! Do you  doc?</span>
                            </div>
                        </li>
                        {/* Other selection card details */}
                    </ul>
                </DialogContent>
            </Popover>


            {/* Leads Table */}
            <div className="overflow-x-auto relative shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-300">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Select
                            </th>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Phone</th>
                            <th scope="col" className="py-3 px-6">Email</th>
                            <th scope="col" className="py-3 px-6">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => (
                            <tr key={sale.id} className="bg-white border-b">
                                <td className="py-4 px-6">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(sale.id)}
                                        onChange={() => toggleRowSelection(sale.id)}
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td className="py-4 px-6">{sale.name}</td>
                                <td className="py-4 px-6">{sale.address}</td>
                                <td className="py-4 px-6">{sale.email}</td>
                                <td className="py-4 px-6">{sale.company}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leads;
