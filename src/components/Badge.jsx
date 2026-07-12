import React from 'react'
import "./badge.css";

export default function Badge({ value }) {
  return (
    <span className="badge">{value}</span>
  )
}
