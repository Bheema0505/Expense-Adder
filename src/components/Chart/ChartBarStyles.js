import styled from "styled-components";

export const ChartBarDivTag = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ChartBarInnerDivTag = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const ChartBarFillDivTag = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`
export const ChartBarLabelDivTag = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`
