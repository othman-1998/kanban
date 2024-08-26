import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Board from '../Board.vue'

interface Task {
  title: string
  desc: string
}

interface Column {
  title: string
  tasks: Task[]
}

interface MyComponentInstance {
  tasks: Column[]
  isActive: boolean
}

describe('Board.vue', () => {
  it('tilføjer en ny opgave og lukker modalen', async () => {
    // Monter komponenten og få en wrapper med korrekt type
    const wrapper = mount(Board) as VueWrapper<MyComponentInstance>

    // Åbn modalen
    await wrapper.find('button').trigger('click')

    // Udfyld felter
    await wrapper.find('input[label="Enter headline"]').setValue('Ny Opgave')
    await wrapper.find('input[label="Enter description"]').setValue('Ny Beskrivelse')

    // Klik på "Create"
    await wrapper.find('button:contains("Create")').trigger('click')

    // Tjek om opgaven blev tilføjet
    const todoTasks = wrapper.vm.tasks[0].tasks
    expect(todoTasks).toContainEqual({
      title: 'Ny Opgave',
      desc: 'Ny Beskrivelse'
    })

    // Tjek om modalen lukkede
    expect(wrapper.vm.isActive).toBe(false)
  })
})
