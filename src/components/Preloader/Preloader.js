import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import s from './Preloader.module.css'

const Preloader = () => <div className={s.preloader_container}><CircularProgress /></div>;

export default Preloader;