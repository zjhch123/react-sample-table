export interface User {
  id: number;
  name: string;
  age: number;
  department: string;
  email: string;
}

export const users: User[] = [
  { id: 1001, name: '张晨', age: 24, department: '研发部', email: 'zhangchen@example.com' },
  { id: 1002, name: '李悦', age: 26, department: '产品部', email: 'liyue@example.com' },
  { id: 1003, name: '王浩', age: 23, department: '研发部', email: 'wanghao@example.com' },
  { id: 1004, name: '赵敏', age: 28, department: '设计部', email: 'zhaomin@example.com' },
  { id: 1005, name: '陈曦', age: 25, department: '运营部', email: 'chenxi@example.com' },
  { id: 1006, name: '刘洋', age: 27, department: '研发部', email: 'liuyang@example.com' },
  { id: 1007, name: '林雨', age: 24, department: '产品部', email: 'linyu@example.com' },
  { id: 1008, name: '周宁', age: 22, department: '设计部', email: 'zhouning@example.com' },
];
