import React from "react";

const escape = (str: string): string => {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
};

const getType = (item: any): string => {
  if (item === null) return 'null';
  if (Array.isArray(item)) return 'array';
  if (typeof item === 'string' && /^https?:/.test(item)) return 'link';
  if (typeof item === 'object' && typeof item.toISOString === 'function') return 'date';

  return typeof item
};

export const renderPropertyValue = (object: any): JSX.Element | undefined => {
  switch (getType(object)) {
    case 'boolean':
      return <span>{object}</span>;

    case 'null':
      return <span>null</span>;

    case 'number':
      return <span>{object}</span>;

    case 'string':
      console.log('strigic', object)
      return <span>{object}</span>;

    case 'link':
      return (
        <span>
            <a href={escape(object)}>{object}</a>
          </span>
      );

    case 'array':
      return (
        <span>
          &#91;
          {object.map((obj: any) => renderPropertyValue(obj))}
          &#93;
          </span>
      );

    case 'object':
      const keys = Object.keys(object).filter(key => object[key] !== undefined);
      return (
        <div>
          {
            keys.map(key => (
              <>
                <span> "{key}": </span> {renderPropertyValue(object[key])}
              </>
            ))
          }
        </div>
      )
  }
};