import { mount } from '@vue/test-utils'
import Card from '../Card.vue'
import { describe, test, expect } from 'vitest'

test('mount component', async () => {
  expect(Card).toBeTruthy()
})
