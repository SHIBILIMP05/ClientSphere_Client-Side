import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 180,
        },
    },
};

const names = [
    'New lead',
    'Interested',
    'April Tucker',
    
];

function getStyles(name: string, selectedStatus: readonly string[], theme: Theme) {
    return {
        fontWeight: selectedStatus.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

interface SelecterProps{
    selectedStatus: string[];
    setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MultipleSelectPlaceholder({selectedStatus,setSelectedStatus}:SelecterProps) {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<typeof selectedStatus>) => {
        const {
            target: { value },
        } = event;
        setSelectedStatus(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl  sx={{ width: 180 }}>
                <Select
                sx={{
                    
                    height: '44px', 
                    backgroundColor: '#fff', 
                    borderRadius: '0px', 
                  
                    '& .MuiInputBase-root': {
                        height: '100%', 
                    }
                }}
                    color='secondary'
                    multiple
                    displayEmpty
                    value={selectedStatus}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return 'Select status';
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>(Multiple selection) </em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selectedStatus, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}