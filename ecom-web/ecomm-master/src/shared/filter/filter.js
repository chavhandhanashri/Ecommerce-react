import React, {useEffect, useState } from 'react';
import './filter.css';
import '../../../node_modules/material-design-icons/iconfont/material-icons.css'

export default function Filter({colors, materials, selectedFilter}) {
const [selectFilter, setSelectedFilter] = useState({selectedColorId: null, selectedMaterialId: null})
const onFilterSelect = (type, id) => {
    if (type === 'color') {
        setSelectedFilter({selectedColorId: id});
    } else {
        setSelectedFilter({selectedMaterialId: id});
    }
    selectedFilter(type, id);
}
  
return (
    <>
    <aside className="">
    <div className="">
        <article className=" pointer card-group-item">
            <div className="filter-header">Materials</div>
            {materials.map((material) => (
                <div
                    onClick={() => onFilterSelect('material', material?.id)}
                    className = {material?.id == selectFilter?.selectedMaterialId ? 'selected-filter' : ''}
                >
                    {material?.name}
                </div>
            ))}
        </article>
        <article className=" pointer card-group-item pt-3">
            <div className="filter-header">Color</div>
            {colors.map((color) => (
                <div
                    onClick={() => onFilterSelect('color', color?.id)}
                    className = {color?.id == selectFilter?.selectedColorId ? 'selected-filter' : ''}
                >
                    {color?.name}
                </div>
            ))}
        </article>
    </div>
	</aside>
    </>
  )
}