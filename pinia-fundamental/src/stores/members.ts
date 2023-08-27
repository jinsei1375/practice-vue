import { defineStore } from "pinia";
import type { Member } from "@/interfaces";

interface State {
  memberList: Map<number, Member>;
}

export const useMemberStore = defineStore({
  id: "member",
  state: (): State => {
    return {
      memberList: new Map<number, Member>()
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      };
    }
  },
  actions: {
    initList(): void {
      this.memberList.set(33456, {id: 33456, name: "田中太郎", email: "aaa@example.com", points: 35, note: "初回入会特典あり"});
      this.memberList.set(44787, {id: 44787, name: "鈴木じろう", email: "bbb@example.com", points: 35, note: "初回入会特典あり"});
    },
    addMember(member: Member): void {
      this.memberList.set(member.id, member);
    }
  },
})